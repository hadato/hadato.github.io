---
title: "Future of the BCD Hand-Watch "
tags: [update]
project: hand-watch
---

## New Goal
After tinkering for a while about the next development, the missing became clear. The power consumption of the current components is relatively high and could be pushed lower with better suited components. 

## Planned Solution
- Use of an ultra-low-power-consumption STM32U073 instead of the ATMega328p microcontroller. The STM32U073 offers native USB communication support and lower power-down consumption
- Use of an ultra-low quiescent current battery charger Ti BQ2510x instead of MCP73831T.
- Implementation of a TPS7A02 Nanopower IQ voltage regulator to decrease the power consumption even lower.
- Exchange of the real time clock to RV-3028-C7 for lower power consumption. 
- Magnetic USB charging and data cable. 
- Custom wireless charging with a simple RX coil setup.  
- Switch to KiCAD as Eagle became subscription-based as a part of AutoCAD