import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'
import Sound from 'react-native-sound'
export default function Play() {
    const [music, setMusic] = useState(null)
    const play = () => {
        let song = new Sound('song_1.mp3', Sound.MAIN_BUNDLE, (err) => {
            if (err) {
                console.log(err,'err');
                return;
            }
            song.play((success) => {
                console.log(success)
            })
        })
    setMusic(song)
    }
  return (
    <View>
          <Text>play</Text>
          <Button title="play" onPress={()=>{play()}}/>
    </View>
  )
}