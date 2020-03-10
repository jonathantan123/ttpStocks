class FindController < ApplicationController

    def find 

        url = "https://cloud.iexapis.com/stable/stock/#{params[:ticker]}/quote?token=#{Rails.application.credentials.apiKey}&filter=companyName,symbol,latestPrice,previousClose,avgTotalVolume"

       

    end 


end
 