# Kubernetes

Command used to create the cluster
```
k3d cluster create -p 8081:80@loadbalancer --agents 2
```
Create the deployment and the service:
```
kubectl apply -f manifests/
```
Forward the port:
```
kubectl port-forward deployment/crudapp-dep 4000:80
```
Open [http://localhost:4000](http://localhost:4000)