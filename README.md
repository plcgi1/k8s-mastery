# START POINT for app with docker containers
cd sa-logic
docker build -t plcgi1/sa-logic .
docker run -d --name sa-logic -p 5000:5000 plcgi1/sa-logic

cd ../sa-nodejs-webapp
docker build -t plcgi1/sa-nodejs-webapp .
docker run -d --name sa-nodejs-webapp --link=sa-logic -p 8080:8080 -e ANALYSE_URL=http://sa-logic:5000  plcgi1/sa-nodejs-webapp

cd ../sa-frontend
docker build -t plcgi1/sa-frontend .
docker run -d --name sa-frontend --link=sa-nodejs-webapp -p 80:80 plcgi1/sa-frontend

This repository contains the source files needed to follow the series [Kubernetes and everything else](https://rinormaloku.com/series/kubernetes-and-everything-else/) or summarized as an article in [Learn Kubernetes in Under 3 Hours: A Detailed Guide to Orchestrating Containers](https://medium.freecodecamp.org/learn-kubernetes-in-under-3-hours-a-detailed-guide-to-orchestrating-containers-114ff420e882)

To learn more about Kubernetes and other related topics check the following examples with the **Sentiment Analysis** application:

* [Kubernetes Volumes in Practice](https://rinormaloku.com/kubernetes-volumes-in-practice/):
* [Ingress Controller - simplified routing in Kubernetes](https://www.orange-networks.com/blogs/210-ingress-controller-simplified-routing-in-kubernetes)
* [Docker Compose in Practice](https://github.com/rinormaloku/k8s-mastery/tree/docker-compose)
* [Istio around everything else series](https://rinormaloku.com/series/istio-around-everything-else/)
* [Simple CI/CD for Kubernetes with Azure DevOps](https://www.orange-networks.com/blogs/224-azure-devops-ci-cd-pipeline-to-deploy-to-kubernetes)
* Envoy series - to be added!
