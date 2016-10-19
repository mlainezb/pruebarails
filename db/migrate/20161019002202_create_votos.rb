class CreateVotos < ActiveRecord::Migration
  def change
    create_table :votos do |t|

      t.timestamps null: false
    end
  end
end
