---
title: "Air Purifier"
summary: "A DIY air purifier based on a commercial M3 MERV13 filter and 3 140 mm Arctic PC fans."
status: "Finished"
stack: "Air quality"
cover: /assets/images/projects/air-purifier/final-on-wall.jpg
project_key: Air-purifier
page_type: project
order: 3
---

## Motivation and Goal
The air quality in the cities, especially in the winter moths is sub-optimal. I wanted to build an **efficient** and **quite** air-purifier.



## The Design
The problem with most of the customer-ready solutions is that the solutions oftentimes adopted HEPA filtering for the home air-purifiers. Even tough these solutions are filtering most of the small particles out, they don't filter enough volume of air. As the filtered air in the room is rapidly mixing with the polluted air, perfectly filtering small amount of air is simply not a good solution.

The whole project got inspired by the Corsi Rosenthal box and later on by [Clean Air Kits](https://www.cleanairkits.com/en-eu). 

While the Clean Air Kits purifiers are very efficient, they need to be free-standing. I wanted a wall-mounted unit. This meant that the filter could either be on the sides or from the front. As the purchase-ready filters don't come in small sizes, the only solution was front-mounted filter. 

## Part List
- M3 MERV13 (20"x25")
- 3 x Arctic P14 Pro
- 12 V Power supply (24W)
- Power cable
- PWN PC fan controller
- Wood screws
- Foam boars
- Heavy stuffing (I used coconut-based industrial mat)
- A bit hot-melt glue

## The Build
As a material I used foam-board which I had laying around. The material is sturdy enough for such a light construction and I have a very good experience with it from my loud-speaker foam-board projects. 

I chose the biggest MERV13/H7 filter I could find (20"x25", MERV 13 from M3) and built the box to fit exactly the filter. The top and bottom sides are double-layered. Due to the presence of only one filter, I decided to place the 140 mm PC fans only at the top of the box. I simply cut the 135 mm holes with a scalpel.

I also added a few supporting bits for the filter to lean against. The sides are squeezed by a rubber band against the filter. 

The 3 Arctic Pro P14 PC fans are carefully mounted using regular wood screws. I used a 12V 24W power supply which I had laying around which is more than sufficient even at the full power. 

The last functional component is a cheap PWM PC Fan regulator. 

When I finished the purifier, the whole light-weight construction dramatically resonated with the PC fans, so as I covered the back and the sided with heavy coconut mat. As a finishing bit, I drilled out an old door handle to use it as a speed-control knob. 

![Without filter]({{ "/assets/images/projects/air-purifier/without-filter.jpg" | relative_url }})
![Controller detail]({{ "/assets/images/projects/air-purifier/detail.jpg" | relative_url }})

## Results
I was simply surprised how well such a simple construction can work. Even on the lowest power the air purifier efficiently filters the inside air - measured by the Air Gradient One. 

It is shocking to see that opening of the window simply results into a massive increase of the small particles. On the contrary, it is very nice to see the air purifier to bring the air quality back to normal again. 

Real data are yet to come when I manage to hack the Air Gradient so it can work with my RPi locally. 

## Price Estimation and Running Costs
The whole unit cost is about 50 eur without the filter. The filter itself is about 24 eur and should be changed regularly (ideally once in 3 to 6 months). 

The power consumption of the 3 Arctic fans is below 1 W for the lowest speed and gets a bit over 10 W for the maximum speed (see [review](https://www.hwcooling.net/en/arctic-p14-pro-a-rgb-dominance-continues-review/36/)). As I run the air purifier on the low levels, the annual power consumption is almost negligible. 



