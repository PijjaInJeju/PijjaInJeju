import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = {
    async get(key){
        try{
            const json = await AsyncStorage.getItem(key);
            if(!json){
                throw new Error('No Save Data');
            }
            const parse = JOSN.parse(json);
            return parse;
        }
        catch (e){
            console.error("불러오기 실패", e);
        }
    },
    async set(key,data){
        try{
            await AsyncStorage.setItem(key, JSON.stringify(data));
        }
        catch (e){
            throw new Error('Failed to save todos');
        }
    }
}