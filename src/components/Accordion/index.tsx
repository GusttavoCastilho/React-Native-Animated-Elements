import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

type AccordionProps = {
  title: string;
  onPress?: () => void;
};

export const Accordion = ({title}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <MaterialIcons
          name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={32}
          color={'#B2BBCE'}
        />
      </View>
      {isExpanded && (
        <View style={styles.content}>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Text>
        </View>
      )}
    </Pressable>
  );
};
