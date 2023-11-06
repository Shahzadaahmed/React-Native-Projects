/**
 *  AUTHOR:   SARMED RIZVI
 *  DESCRIPTION: MENU TABS FOR TOP USED COMMONLY IN DESIGN.
 */

// IMPORTING THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
	tabs: Array<Object | string>,
	activeTab: string,
	setActiveTab: Function
}


const MenuTabs = (props: Props) =>
{
	const {tabs, activeTab, setActiveTab} = props;
	return (
		<View
			style={[styles.tabContainer, styles.row, styles.justifyBetween]}
		>
			{tabs.map((title, index) => (
				<TouchableOpacity
					style={[
						activeTab === title ? {backgroundColor: "white"} : {},
						styles.singleTab,
					]}
					key={index}
					onPress={() => setActiveTab(title)}
				>
					<Text style={[
							styles.textCenter,
							{fontFamily: activeTab === title ? Fonts.Medium : Fonts.Regular,
							color: activeTab === title ? theme.colors.lightBlack : theme.colors.darkGrey,
                            fontSize:actuatedNormalize(14)}
						]}
					>
						{title}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

export default MenuTabs;

const styles = StyleSheet.create(
	{
		tabContainer:
		{
			backgroundColor: theme.colors.bgColor,
			padding: 4,
			borderRadius: 16,
			// height: 24,
			// flex: 2,
		},
		singleTab: {borderRadius: 14, paddingVertical: 8, flex: 2},
        textCenter: {textAlign:'center'},
        row: {flexDirection: 'row', alignItems: 'center'},
        justifyBetween: {justifyContent:'space-between'}
	})
