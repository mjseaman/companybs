class PagesController < ApplicationController
	def index
	end

	def bs
		render text: Faker::Company.bs
	end
end