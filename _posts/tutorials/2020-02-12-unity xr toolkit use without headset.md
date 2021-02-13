---
layout: post-blog
author: Chel
title: How to Set Up the Unity Interaction Toolkit for VR Development and Testing - Important Points you need to Know
seo: unity interaction toolkit unity vr plugin manager without headset unity vr development vr unity oculus game development oculus software vr tools vr software vr development unity vr unreal engine vr vr games on oculus
description: the new Unity Interaction Toolkit holds a lot of promise for VR Developers to easily prototype an test new VR Ideas without heavy Plugin Downloads. In this tutorial, you would understand the workings of the toolkit in a simplified way and get set to use in your projects.
img-src: ../assets\images\Blog\vrtk-unitydev
---


### On this Page
* About the Unity Interaction Toolkit
* Installation of Preview Template
* Features of UIT
* Oculus XR Plugin for UIT
* Mock HMD Plugin for UIT (Use witout Headset)
* How to Use in your Project
* Documnetation - About Basic Functionalities
* Feed Back



## About the Unity Interaction Toolkit
The Unity XR Interaction Toolkit is a Package Provided by Unity for creating VR, AR Experiences. It provides a framework that makes VR and UI interactions available from Unity input events(Keyboards, Gamepads and Controllers etc.). The core of this system is a set of base Interactor and Interactable components and prefabs, and an Interaction Manager that enables the relative working of these two components. It also contains helper components that you can use to extend functionality for drawing visuals and hooking in your own interaction events. It can be used in both VR and AR Instances and comes with different functions, scripts and classes for building gameplay.


The Unity XR Interaction Toolkit is a very new package released in the fall of 2019 with the purpose of taking the place of popular VR and AR Plugins like the HTC Vive Utiliy Plugin, Oculus VR Plugin, VRTK etc. The goal is to provide a framework that allows simple integration of different VR SDKs, i.e (Building experiences that can be tailored to different standalone/ VR Headsets without hassels). Without diving into the details - The XR Interaction toolkit can Detect the device plugged in and switch functionality to it solely.

One things to Note but which isn't the focus of this tutorial is that the XR Interaction Toolit is part of the XR Plugin Management which in whole referes to all Plugins and SDKs that can be mapped and integarted with the XR Interaction Toolkit for VR Development. Later in this tutorial, We are gonna look at some of them like the Oculus XR Plugin.

Now I can go on with more explanation but, a much better way for youy to grasp the whole concept involved is through visualization and hands-on testing. For this reason, In the next section we look at how to install and open in Unity a Starter template that uses the XR Interaction Toolkit for VR development.


### Installation of Unity's XR Interaction Toolkit Starter Template
Now we are gonna install the Starter Template which we are later going to open in Unity before we can start understanding each componenet in detail, to begin, follow the steps below;

1. Download the XR Interaction Toolkit Starter Template from this Repo Link <a href="https://github.com/Unity-Technologies/XR-Interaction-Toolkit-Examples">Link</a>

2. Extract the Folder Using Windows File Explorer or any other third party software

3. After extraction - Copy the VR folder inside the Xr interaction toolkit file out to another location and Rename it e.g Downloads

4. Open up Unity Hub and Click the Add Projects Button - When Prompted select the recent VR project folder you extracted

5. You would need to select a particular unity version for opening this project - Anything from LTS 2019.4 - 2020 versions should work fine.

If you follow the listed steps correctly, wehn unity opens fully, in the scene view you should see something like below. If that isn't the case for you, please leave a comment below and I will be glad to help. Some of the common problems that arises is (pink screen, error in console etc).

Now that you have it opened up, we can move on to the more juicy part of this article 😉; Explaining what is happening on the screen and how to set up for a VR project. Let's quickly get down to it


#### Features of UIT (From now on UIT means Unity XR Interaction Toolkit)

By features, what do I mean? I mean this; What can you as a developer achieve with UIT. In this section I hope to give you a general to specifics scoped idea without anything much as Jargon!.

After Playing around with a few VR SDKs before my recent relationship with Unity's UIT, I had one goal in mind - Build a prototype VR Project. Back then, I used VRTK to test the waters and now I use UIT rather comfortably for someone without previous experience with P_lugins and SDKs integration. My honest opinion is that I love UIt and totally wish more features can be added to it because it makes building so much easier.

It's fair to say that UIT hasn';t reached the level of functionalities VRTK and other SDKs brings to the table but there's one important value VR Developers absolutely need caaled _____ which it has great promise for. Less talk now, lert's meet the features of my new best friend.


* Interactors & Interactables: This Point doesn't need much explanation. It's well know that every VR World/experiences must have basic interactors(In layman terms - XR Controllers) and Interactables (Objects yyou can Grab and Select). As for AR, this isn't a requiremnet because the physics associated with it often involves overlaying objects on surfaces without much need for interaction, which is not to say that in some cases interaction isn't used. 
	* Interactors - UIT achieves this Feature using the <b>Cross-platform XR controller input</b> Componenet. There are three main functions this provides (Object hover, select and grab)
	* Interactables - For an object to be an active Interactable, it must have a collection to scripts applied to it - the main being the XR Grab Interactable, XR Direct Interactable, XR Simple Interactable. These three are used differently and of the three, the first is most frequently used.

* A VR Camera Rig: As Expected, when creating VR Experiences, the differenciating factor is a 360 degree world that can be viewed from deifferent angles, as such, what makes this possible is a VR Camera Rig. UIT comes with a XR rig that can be configured for either room or stationary VR. There isn't much talk about this after it has been added to the scene, one important detail to know is that the XR controllers are usually a childeren of this Prefab in the Hierachy.
NOTE: Once the Sample UIT Package is Succesfully set up - You have access to Most components directly from the GameObject Window.

* Teleportation: With UIT, you can set up teleportation using the XR Controller. It Involves a fairly easy process of creating an area/plane and adding the Teloprataion Componenet to it. This allows the Player to hover over active fields and appear there instataneously.

* Visual Feedback/ Line rendering: perhaps one of the most exciting aspects of VR. Grabbing objects far away from the player and teleportantion. The Line Renderer or Ray caster projects a Line (Color remains Unfixed) from your virtual controllers when you hover around Active fields - What I mean by this, Are you hovering over an Interactable or an area with teleportation set to active? If so, this Indicating Line is projected. By default, the Line Renderer is enabled to constantly project regardless if state is active but this can be fixed with a little code.

* Haptic Feedback: Since Haptics isn't a new term i the VR field, i would avoid divulging deeply into this. Customary, UIT has this featur that can be set up with the XR Controllers for giving a Haptics signals when Certain Events are Triggered in VR

Truly, there are always more features that I decide to not mention here, the above more-important ones are basically the core of UIT that must be understood while others can be picked up along the way. Dash it all!, I have built a working VR Prototype Project with just the core features explained above 🥱. Oh I promise, More good stuff to come. 

### Oculus XR Plugin for UIT

According to Statista, <a href="statista.com/vr">50% Of VR Developers create VR Games to Pusblish on the Oculus Store</a>. If this doesn;'t ring a bell, Well, Noting might for you. Because Oculus, is the fastest growing Platform bothe for Developers and Gamers. - For Devs, Revenue - For Gamers, Premium Entertainment (Absolutely Relative). As such, developers at Oculus were quick to get news about Unity's revised plan and created a plugin just for folks adopting the UIT package for VR Development. Today, You are gonna learn about this High-Budget Plugin. 


If you want to create games for Oculus Standalone Headsets or Oculus Go and also plan to use the UIT package, one thing is constant - You need the Oculus XR Plugin. Much of what I talked above applies to it as well, so you probably do get the hang of what it goes. So now, let's go right into how to install and configure it for the current starter scene in Unity (if you have it open, and not having ignored me this whole time). Follow the Ordered steps below, I won't write it twice

1. 

2.  


