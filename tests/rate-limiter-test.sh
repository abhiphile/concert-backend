for i in {1..81}
do
  echo "Request $i:"
  response=$(curl -s -w "\nHTTP Code: %{http_code}" localhost:3000)
  echo "$response"
  echo
done
