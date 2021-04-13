# How to run the app

Open a terminal and run the following command to spin up the API and React UI

```
docker-compose up
```

_Navigate to http://localhost:3000 to view the UI_

# How to run the tests

Run the following command in a separate terminal (You must have your UI and API running)

```
cd e2e

npm run e2e
```

# Deploy on Kubernetes in Google Cloud Environment

```
git clone https://github.com/Jackthomsonn/recipe-cookbook.git
cd recipe-cookbook/api
kubectl apply -f deployments/deployment.yml
kubectl apply -f deployments/service.yml
```

# Update on Kubernetes

```
kubectl set image deployment recipe-cookbook-api-deployment  recipe-cookbook-api=jackthomson/recipe-cookbook-api:latest

or

kubectl rollout restart
```

# Track rollout events

```
kubectl rollout status deployment recipe-cookbook-api-deployment
```

# Screenshots

![Screenshot 2021-04-04 at 17 11 02](https://user-images.githubusercontent.com/11717131/113514834-bd4cda80-9568-11eb-8fc6-dc6b13df59f6.png)
![Screenshot 2021-04-04 at 17 11 10](https://user-images.githubusercontent.com/11717131/113514836-c2118e80-9568-11eb-9c3a-0d65ecdfe884.png)
![Screenshot 2021-04-04 at 17 11 20](https://user-images.githubusercontent.com/11717131/113514841-c76ed900-9568-11eb-9752-a1c1b17b1fb9.png)
