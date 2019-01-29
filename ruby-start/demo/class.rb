
class Greeter
  def initialize(name = "World")
    @name = name
  end
  def say_hi
    puts "Hi #{@name}!"
  end
  def say_bye
    puts "Bye #{@name}, come back soon."
  end
end

greeter = Greeter.new("Pat")
greeter.say_hi
greeter.say_bye

Greeter.instance_methods
Greeter.instance_methods(false)

greeter.respond_to?("name") # false
greeter.respond_to?("say_hi") # true

class Greeter
  attr_accessor :name
end

greeter.respond_to?("name") # true
greeter.respond_to?("name=") # true