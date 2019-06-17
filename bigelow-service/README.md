## service development
```
sudo npm install -g serverless
cd bigelow-service
serverless deploy -v                        # Deploy service changes
serverless deploy function -f do_bigelow    # Deploy only lambda changes

```