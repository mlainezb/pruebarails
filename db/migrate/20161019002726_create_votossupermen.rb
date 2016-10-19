class CreateVotossupermen < ActiveRecord::Migration
  def change
    create_table :votossupermen do |t|
      t.string :name
      t.integer :email

      t.timestamps null: false
    end
  end
end
