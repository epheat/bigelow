## service development
```
sudo npm install -g serverless
cd bigelow-service
serverless deploy -v                        # Deploy service changes
serverless deploy function -f do_bigelow    # Deploy only lambda changes

# Simulate API gateway on localhost:3000
serverless offline

```