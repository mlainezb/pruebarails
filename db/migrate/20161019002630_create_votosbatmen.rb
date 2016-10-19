class CreateVotosbatmen < ActiveRecord::Migration
  def change
    create_table :votosbatmen do |t|
      t.string :name
      t.integer :email

      t.timestamps null: false
    end
  end
end
