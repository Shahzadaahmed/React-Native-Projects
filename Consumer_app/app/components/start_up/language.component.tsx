/*
	    AUTHOR: MUHAMMAD MUNIR
   DESCRIPTION: LANGUAGE SELECTION SCREEN.
*/
import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity, SafeAreaView, Alert} from "react-native";

import { httpRequest } from "../../services/network.service";
import styles from "./startup.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateSiteVariables } from "../../utils/common";
import {theme} from "../../common";
import {setGlobalVariables} from "../../utils/globals"
const Language = () =>
{
	const navigation: any = useNavigation();
	const [selected, setSelected] = useState<string>('');
	const [languages, setLanguage] = useState([]);
	const [disableButton, setDisableButton] = useState<boolean>(true)
	
	// FOR GETTING LANGUAGE FROM AN API
	useEffect(() =>
	{
		// REQUEST TO BACKEND FOR LANGUAGES
		httpRequest("app/language/list", "GET").then((languages: any) =>
		{
			// SETTING LANGUAGE STATE
			setLanguage(languages.languages);
		});
	}, [])
	
	const getStaticData = () =>
	{
		let language_id = "en";
		// TODO: DISPLAY LOADER.
		httpRequest("", {language_id: language_id}, (response)=>
		{
			setGlobalVariables (response.data);
			let dataString = JSON.stringify(response.data);
			AsyncStorage.setItem('lk_static_data', dataString);
			
			// TODO: HIDE LOADER AND TAKE USER TO THE NEXT SCREEN.
		})
	}
	
	// TBD
	const updateLanguage = async () =>
	{
		Alert.alert('called')
		// UPDATING/SETTING LANGUAGE IN ASYNC STORAGE
		AsyncStorage.setItem("language", selected);
		navigation.navigate('Slider',{paramKey: selected,started:this.state.getStarted});
		
		await updateSiteVariables(selected);
	}
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.textShow}>
				<Text style={[styles.langHeadingText]}>Choose language</Text>
			</View>
			<FlatList
				data={languages}
				horizontal={false}
				renderItem={({item}: any) => (
					<TouchableOpacity
						onPress={() => {
							setSelected(item.language_id)
							setDisableButton(false)
						}}
						style={[
							styles.lanShow,
							selected == item.language_id && {borderWidth: 2, borderColor: theme.colors.secondary},
						]}
					>
						<Text style={[styles.lanText]}>{item.name}</Text>
					</TouchableOpacity>
				)}
				keyExtractor={(item: any) => item.language_id}
			/>
			<View style={{...styles.buttonShow,opacity: disableButton ? 0.4 : 1}}>
				<TouchableOpacity style={styles.submitButton}
					onPress={getStaticData ()}>
					<Text style={styles.cnfrmText}>Confirm</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Language;
