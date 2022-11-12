# Team PNP | दृश्य

## Problem Statement

Vision plays an important role in the daily life of a person. From getting up to start the day, until ending it, eyes are the most important organs of our body. Unfortunately some people are not able to see this beautiful world. Visually impared people can’t easily recognize obstacles or stairs while using normal blind stick. They struggle with their day to day life and everyday activities.

![blind stick](https://thumbs.dreamstime.com/b/closed-eyes-icon-white-background-black-flat-line-art-isolated-155579255.jpg)

The blind traveler should
depend on any other guide like blind cane , people information , trained dogs, etc. About the **90% of the worlds visually
impaired live in developing countries**. No safety features are present on the normal blind stick which is mostly used by visually impaired people for their visual aid.

# Proposed Solution

Now there are other technical solution like Smart Blind Stick using sonic sensors and other components but these solutions still have many disadvantages for example; They cant detect obstructions that are hidden but very dangerous for the blind such as downward stairs, holes etc. Usually, the feedback information comes out as either vibration or sound signals. Our solution is to develop a smart glass which is not unlike any other smart glasses.

![Headphones](https://media1.giphy.com/media/enUXK8X9kZkvcBTUur/giphy.gif?cid=790b761102ff1283dcd2cd7045e20fd12fb69f5ee7218baf&rid=giphy.gif&ct=g)

This smart glasses will be developed for those users who are visually impaired and have difficulty regarding their vision. Our device will not only be able to predict the objects but also find their location in terms of bounding boxes. The impaired person will be provided with the information through speakers that would be attached to their smart glasses. The bounding boxes in the field of view of the camera will be entertained to the ears of the user with a simple location based quadrant mapping with a central field. If an object is in any of these location, it's position along with the object type will be played through the speakers. This enables the user to be conscious about their surroundings.

## How do we priortize incase of multiple objects in the FOV?

We use the following algorithm to choose the best object in the scene:

![aiming](https://media1.giphy.com/media/xT5LMsfrTiHCzLG0A8/giphy.gif?cid=ecf05e47g1wbskk1d7sdrldjfld2lfanrg4brnr6e1oti3aq&rid=giphy.gif&ct=g)

- Objects in the center of the field are more prone to be selected because we set a focal point straight infront of the glasses (the focus shifts with the movement of the user's head),
- The objects with bigger bounding box are then given more priority as it results to closer objects,
- Bounding box with higher prediction score have some weight in which final box is to be selected.

## How do we aid user to direct towards the detected object ?

The FOV is divided into 5 regions that distinctly distinguish where the object is. This can be clearly seen in the image below.

![quadrant_view](https://media.discordapp.net/attachments/1032654825382490167/1040959329664241664/image.png?width=448&height=388)

Each region is logically divided in the view of user wearing the device. Here,  ***L*** refers to **left** from the user's view, ***R*** refers to **right** from the user's view, ***T*** refers to **top** from the user's view, ***B*** refers to **bottom** from the user's view and ***C*** refers to **center** from the user's view. A combination of any of them maps them to a particular region in the FOV.