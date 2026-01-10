---
title: "Wristwatch"
summary: "A binary-coded-decimal hand watch base on ATMega328p. Hidden into an elegant wooden package."
status: "Functional prototype"
stack: "Embedded systems, C++ for uC, PCB design"
cover: /assets/images/projects/hand-watch/hand-watch-cropped.jpg
project_key: hand-watch
page_type: project
order: 3
---

## Goal
As a person who normally does not wear hand watch, I wanted to have a wristwatch which would motivate me to wear it. Therefore I decided to build a binary-coded-decimal watch packed in a nice wooden frame. 

## Current state
- First wearable functional prototypes
- New wireless-charging designs is in the pipeline

## Description
The watch is based on the following components and has been custom-designed and prototyped on a breadboard.

### Main Watch Components
- 25 LEDs
- ATMega328p microcontroller
- PCF8563 real-time clock
- Small tactile switch
- MCP73831T Li-Ion battery charger
- Rechargeable 2032 Li-Ion battery
- Phototransistor for LED intensity adjustment
- USB connector for charging

### Working Principle

The main part of the project is based on an 8-bit microcontroller (uC) ATMega328p connected to the PCF8563 real-time clock (RTC) using I2C. The RTC keeps the correct time, whereas the uC is responsible for all logical operations, inputs from the button and LED output. When the button is pressed, the uC wakes up and the current time is read from the RTC. The time (hours, minutes, seconds) is displayed in a binary-coded decimal (BCD) format on the LEDs using multiplexing. If the button is pressed shortly once more, date (day, month, year) is displayed. Third short press shows the battery voltage. Another short press puts the uC to the sleep mode again. If the button is not pressed for more than 8 s, the uC goes to the sleep mode and all LED are turned off. If a longer press is performed, the watch goes into the sleep mode from either of the previous states. 

To enter the time-setting mode, the button has to be pressed for more than 1 s in either of the previously mentioned modes. If the time-setting mode is entered, a variable to be set starts to blink (first, variable second starts to blink). A short press increments the corresponding variable, longer press (over 0.25s) moves to the next variable (seconds -> minutes -> hours -> day -> month -> year), extra long press confirms the changes and makes the watch to return to the time-display mode.

To save the energy during the run-time and minimize the parts-count, the uC runs on an internal 1 MHz oscillator.

### Code

The code is in my GitHub folder. I haven't managed to properly clean and restructure the code after I started my PhD so it is a bit of chaos.

The watch is programmed in C++ and is split into three different parts. For the communication with the RTC, twi.h and twi.cpp files were created. For the basic watch operation (button press, LED multiplexing, time reading/setting) a watch.h and watch.cpp files were created. The main.cpp then binds everything together. 

### Board Design

The board was designed using EAGLE 9.5.1. 

## Future Goals

- Improve the coding and commenting
- Making a more versatile design which can be used in different watches ranging from tiny hand watches to table/wall watches.
- Implement USB communication with PC to be able to conveniently set up time on the watch (different uC needed).
- Finish development testing of the new wirelessly charged version
