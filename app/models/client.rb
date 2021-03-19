class Client < ApplicationRecord
	belongs_to :developer
	has_many :projects
end
