// App.js
import React, { Component } from 'react';
import {StyleSheet , View} from "react-native" ;
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function VoiceCallPage(props) {
    const userId = String(Math.floor(Math.random() * 100000));

    console.log("id" , userId);
    
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={54618004}
                appSign={"dfc704968a5a28124d49ed00141b4de0d961524ea54cf30dfa9257255db7329a"}
                // userID={"121212"}
                userID={userId}   // userID can be something like a phone number or the user id on your own user system. 
                // userName={"user_12345"}
                userName={`user_${userId}`}
                callID={"group123"}     // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { 
                        // props.navigation.navigate('HomePage') 
                    },
                    onHangUp: () => { 
                        // props.navigation.navigate('HomePage') 
                    },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1 ,
    },
})