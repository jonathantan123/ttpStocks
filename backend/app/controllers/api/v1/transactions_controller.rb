class Api::V1::TransactionsController < ApplicationController

    def create 
        ### 1) find the user through params sent from front end 
        user = User.find(params[:user_id])
     
        #### 2) Set query term to ticker sent from front (query is not case sensitive)
        query = params[:ticker]

        ### 3) Url filtered just to get necessary json information, no need to return all 
        url = "https://cloud.iexapis.com/stable/stock/#{query}/quote?token=#{Rails.application.credentials[:apiKey]}&filter=companyName,symbol,latestPrice,previousClose"
        response = HTTParty.get("#{url}")

        ### 4) check response json. Api will return unknown symbol if a ticker does not exist. 

        if (response.body === "Unknown symbol") 
            render json: {error: "Invalid Ticker"}
        else 
            ### 5) Else parse json. Find user balance and calculate total cost of the transaction.
            json = JSON.parse response.body
            userBalance = user.balance.to_f.round(2)
            ticker = json["symbol"]
            latestPrice = json["latestPrice"].to_f().round(2)
            totalCost = latestPrice * params[:quantity].to_i()
            ### if User does not have enough funds, render error 
            if(totalCost > userBalance )  
                render json: {error: "you dont have enough funds "}
            else   
                ### Else find the user portfolio and thier stocks saved in an array 
                portfolio = user.portfolio
                portfolioStocks = portfolio.stocks
                ### go through all of the stocks in the portfolio to see if the ticker already exists 
                foundStock = portfolioStocks.find{ |stock| stock.ticker === ticker} 
                ### if it exists, increase the quantity by qty user inputted
                if (foundStock)
                    foundStock.quantity += params[:quantity].to_i()
                    # foundStock.price = latestPrice
                 else  
                    ### otherwise, create a new stock and add it to the user's portfolio of stocks
                    newStock = Stock.create(ticker: "#{json["symbol"]}", price: "#{json["latestPrice"]}", quantity: params[:quantity].to_i(), color: "gray")
                    portfolioStocks.push(newStock)
                 end 
                    ### Update user's portfolio and balance. Create a new transaction and send back to front end. 


                  portfolio.update(stocks: portfolioStocks)
                  user.update(balance: user.balance - totalCost )
                  newTransaction = user.transactions.create(ticker: "#{json["symbol"]}", quantity: params[:quantity].to_i, price: "#{json["latestPrice"]}")
                 render json: {message: "Purchased!", balance: user.balance }
            end
        end  
    end 
end 

