class FindController < ApplicationController

    def find 
    ### 1) Find user portfolio and corresponding stocks
       portfolio =  Portfolio.find_by(user_id: params[:id])
       portfolioStocks = portfolio.stocks 
    ### 2) Map through all stocks and fetch to API for each individual stock
       portfolioStocks.map do |stock| 
            url = "https://cloud.iexapis.com/stable/stock/#{stock.ticker}/quote?token=#{Rails.application.credentials[:apiKey]}&filter=open,close,latestPrice,previousClose,iexRealtimePrice"
            response = HTTParty.get("#{url}")
            json = JSON.parse response.body
            ### 3) Update stock price and total with latest data from API
            stock.price = json['latestPrice'].to_f().round(2)
            stock.total = stock.price * stock.quantity
            ### 4) if stock market has closed, then "open" attribute will be null. In this case 
            ###    use the previous close price to compare against current latest price. 
            comparisionPrice =  json["open"] ? "open" : "previousClose"
            ### 5) Check stock price against comparision price to set what price should display on front end
            if (stock.price > json[comparisionPrice].to_f()) 
                stock.color = "green"
            elsif (json["latestPrice"].to_f() < json[comparisionPrice].to_f())
                stock.color = "red"
            else 
                stock.color = "grey" 
            end 
        end 
        render json: portfolioStocks
    end 
end
 