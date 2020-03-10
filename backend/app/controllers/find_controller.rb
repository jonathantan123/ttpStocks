class FindController < ApplicationController




    def find 
        query = params[:ticker].capitalize() 
        url = "https://cloud.iexapis.com/stable/stock/#{query}/quote?token=#{Rails.application.credentials[:apiKey]}&filter=companyName,symbol,latestPrice,previousClose"


        response = HTTParty.get("#{url}")

        if (response.body === "Unknown symbol") 
            render json: {error: "Invalid Ticker"}
        else
            json = JSON.parse response.body

            
            debugger
            puts "sucuess"
        end 

        
       

    end 


end
 