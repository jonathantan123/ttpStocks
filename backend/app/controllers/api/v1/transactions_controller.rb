class Api::V1::TransactionsController < ApplicationController


    def index 
        trans = Transaction.all
        render json: trans

    end 


    def create 
        ## first find the stock  
    
        user = User.find(params[:user_id])
     
        
        query = params[:ticker].capitalize() 
        url = "https://cloud.iexapis.com/stable/stock/#{query}/quote?token=#{Rails.application.credentials[:apiKey]}&filter=companyName,symbol,latestPrice,previousClose"
        response = HTTParty.get("#{url}")

        if (response.body === "Unknown symbol") 
            render json: {error: "Invalid Ticker"}
        end 

            json = JSON.parse response.body
            
            userBalance = user.balance.to_f.round(2)
            totalCost = (json["latestPrice"].to_f().round(2) * params[:quantity].to_i())
            


            if(totalCost > userBalance )  
                
                render json: {error: "you dont have enough funds "}
                puts "nope"
         else 
                    
                    
                  user.update(balance: user.balance - totalCost )               
                    newTransaction = user.transactions.create(ticker: "#{json["symbol"]}", quantity: params[:quantity].to_i, price: "#{json["latestPrice"]}")

                    render json: {message: "Purchased!", balance: user.balance }

                
            end
    end  

end 

