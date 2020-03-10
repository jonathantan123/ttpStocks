class Api::V1::UsersController < ApplicationController


    def create 
        
        # user = User.find(params)
        
        if user.save 
            render json: user 
        else 
            render json: {errors: user.errors.full_messages}
        
    end 
end 

