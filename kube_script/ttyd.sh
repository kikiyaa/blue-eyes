#!/bin/bash
if [ $# -ne 1 ] ;then
   echo "Please check the args"
   exit 0
fi

USER_ID=$1
USER_UID="1000178"
USER_GID="1000178"
USER_GROUP_ID="in0178"
#USER_UID=$(id -u $1)
#USER_GID=$(id -g $1)
#USER_GROUP_ID=$(id -g -n $1)

#sed -e 's/$USER_GROUP_ID/'$USER_GROUP_ID'/g;s/$USER_ID/'$USER_ID'/g;s/$USER_UID/'$USER_UID'/g;s/$USER_GID/'$USER_GID'/g' deploy.yaml
kubectl create ns $1
sed -e 's/$USER_GROUP_ID/'$USER_GROUP_ID'/g;s/$USER_ID/'$USER_ID'/g;s/$USER_UID/'$USER_UID'/g;s/$USER_GID/'$USER_GID'/g' ./kube_script/ttyd.yaml | kubectl create -n $1 -f -