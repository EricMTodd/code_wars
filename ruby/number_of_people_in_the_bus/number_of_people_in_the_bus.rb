def number(bus_stops)
  # puts("\n#{bus_stops}")
  passenger_count = 0
  bus_stops.each { |x, y|
    # puts("x: #{x}, y: #{y}")
    passenger_count += x
    passenger_count -= y
  }
  # puts passenger_count
  passenger_count
end

number([[10, 0], [3, 5], [5, 8]])
number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])
number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])

### BEST PRACTICE ###
# This was my initial strategy, but couldn't execute it correctly.

def number(bus_stops)
  bus_stops.sum { |x, y| x - y }
end