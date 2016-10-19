class PagesController < ApplicationController
  def batman
  end
  def superman
  end	
  def batmanvssuperman
  end
  def interior
      unless params[:name].blank?
      Votossuperman.create({
      name: params[:name],
      email: params[:email],
      })
    end	
 end  
end
