class AddProjectsToSnippets < ActiveRecord::Migration
  def self.up
    add_column :snippets, :project, :string
  end

  def self.down
    remove_column :snippets, :project
  end
end
