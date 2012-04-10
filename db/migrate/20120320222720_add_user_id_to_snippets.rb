class AddUserIdToSnippets < ActiveRecord::Migration
  def self.up
    add_column :snippets, :user_id, :integer
  end

  def self.down
    remove_column :snippets, :user_id 
  end
end
