class Snippet < ActiveRecord::Base
  belongs_to :user
  has_many :pages
  accepts_nested_attributes_for :pages
end
