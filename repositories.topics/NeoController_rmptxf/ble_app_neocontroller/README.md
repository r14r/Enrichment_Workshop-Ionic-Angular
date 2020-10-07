> Work in progress

### The hardware :

#### Boards supported:

The project supports 4 development boards :
* [**The nRF52-DK (PCA10040)**](https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52-DK).
* [**The nRF52840-DK (PCA10056)**](https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52840-DK).
* [**The Adafruit Feather nRF52 Bluefruit LE (ADA32)**](https://www.adafruit.com/product/3406).
* [**The Adafruit Feather nRF52840 Express (ADA40)**](https://www.adafruit.com/product/4062).

#### RGB led :

We're controlling a **WS2812b** RGB led, as it is one of Neopixels leds that supports volatges ranges from **3.3 to 5v**. So, no aditional components will be required to drive it with our **3.3v** based SOCs.
There are other Neopixels type like the **WS2812** RGB led, this type requires voltages that ranges from **5v to 7v**, so you may need to use a logic level converter circuit to drive it.

> The [**datasheet**](https://cdn-shop.adafruit.com/datasheets/WS2812.pdf) for the **WS2812** says : **0.7VDD** (VDD = 4.5～5.5V)->(0.7VDD = 3.15 ~ 3.85v) for the **Minimum Input voltage level**. So it might still work, but not at full brightness.
![WS2812 Eelctricalk characteristics](https://github.com/rmptxf/NeoController/blob/master/assets/WS2812-Electrical_characteristics.PNG)

### The firmware :

The project is :
* Compatible with nRF5_SDK versions starting from **v15.3**.
* Uses the **SEGGER** toolchain.
* Uses the **I2S** peripehral to drive the WS2812b RGB led.

If this is your first time working with the nRF5_SDK, I do recommend first checking my [**getting started guide**](https://nrf5dev.com/tutorials/getting-started/).

### Testing the application :

You need to copy the **ble_app_neocontroller** project folder into the **ble_peripheral** folder under the **examples** in the nRF5_SDK.

If you're using any of the Adafruit boards, make sure you head over to the [boards_files](https://github.com/rmptxf/NeoController/blob/master/boards_files) folder, and follow the included instruction.

If you will be testing using the **Adafruit Feather nRF52840 Express (ADA40)**, you already have an on-board WS2812b ready to use.

![The Adafruit Feather nRF52840 Express](https://github.com/rmptxf/NeoController/blob/master/assets/Adafruit_Feather_nRF52840_Express.PNG)

And it is already set in the firmware.

If not, you'll need to get a WS2812b RGB led module, like [**this one**](https://www.sparkfun.com/products/13282) from **Sparfun**

![SparkFun RGB LED Breakout - WS2812B](https://github.com/rmptxf/NeoController/blob/master/assets/Ws2812B_PinsRev.jpg)

> Make sure you use the **DI** pin for connecting it to you board.

And you can change the pin number in the **main.c** file for your board.

```c
#if defined(BOARD_ADA40)
  #define neopixel_pin                  NEOPIXEL_PIN                            /**< ADA40 (Adafruit nrf52840 express) has a Neopixel on-board. */
#elif defined(BOARD_PCA10056)
  #define neopixel_pin                  16                                      /**< Neopixel pin number. */
#elif defined(BOARD_ADA32)
  #define neopixel_pin                  16                                      /**< Neopixel pin number. */
#elif defined(BOARD_PCA10040)
  #define neopixel_pin                  16                                      /**< Neopixel pin number. */
#endif
```

To flash the compiled firmware to custom development boards (example: **Adafruit boards**, mainly any nRF52 based board that doesn't have an on-board j-link debugger), you can use a nordic development kit.

![flashing the firmware to the adafruit nrf52840 via swd using the nrf52840-dk](https://github.com/rmptxf/NeoController/blob/master/assets/adafruit_nrf52840-flashing_via_swd.jpg)
> 1: **The nRF52840-DK**. It can be any develoment board that has an on-board segger j-link and a debug out port.

> 2: **The Adafruit Feather nRF52840 Express board**. If you will be using the nRF52832 version, you'll need to solder the SWD connector or connect the SWD pins (back of the board as test points) to the **P20** connector on the nRF52840-DK.

> 3: **The j-link cable**: Socket to socket, 2x5 pin, 1.27mm pitch. [**Example**](https://www.adafruit.com/product/1675).
