package com.A605.pijja;

import java.util.*;
public class testmain {
    static class Path{
        int placeId1;
        int placeId2;
        int dist;
        public Path(int placeId1,int placeId2,int dist){
            this.placeId1=placeId1;
            this.placeId2=placeId2;
            this.dist=dist;
        }
    }
    static int[] parent;
    public static void main(String[] args) {
        List<Path> placeIdList=new ArrayList<>();
        HashMap<Integer,Integer> map=new HashMap<>();
        placeIdList.add(new Path(10,11,10));
        placeIdList.add(new Path(10,12,5));
        placeIdList.add(new Path(10,13,2));
        placeIdList.add(new Path(10,14,10));
        placeIdList.add(new Path(11,12,7));
        placeIdList.add(new Path(11,13,4));
        placeIdList.add(new Path(11,14,1));
        placeIdList.add(new Path(12,13,9));
        placeIdList.add(new Path(12,14,10));
        placeIdList.add(new Path(13,14,10));

        int idx=0;
        for(int i=0;i<placeIdList.size();i++){
            int place1=placeIdList.get(i).placeId1;
            int place2=placeIdList.get(i).placeId2;
            if(!(map.containsValue(place1))){
                map.put(idx,place1);
                idx+=1;
            }
            if(!(map.containsValue(place2))){
                map.put(idx,place2);
                idx+=1;
            }
        }
        parent=new int[idx];
    }
    public int find(int x){
        if(x==parent[x]){
            return x;
        }
        parent[x]=find(parent[x]);
        return parent[x];
    }
    public void union(){

    }

}
