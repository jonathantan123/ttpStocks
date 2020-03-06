class User < ApplicationRecord

    has_one :portfolio
    has_many :transactions
    has_many :stocks, through: :transactions
end
