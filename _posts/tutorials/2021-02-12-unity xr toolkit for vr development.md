---
layout: post-blog
author: Chel
title: How to Set Up the Unity Interaction Toolkit for VR Development and Testing - Important Points you need to Note
seo: unity interaction toolkit unity vr plugin manager without headset unity vr development vr unity oculus game development oculus software vr tools vr software vr development unity vr unreal engine vr vr games on oculus oculus developer xr plugins vr prototype projects
description: The rather new Unity Interaction Toolkit holds a lot of promise for VR Developers to easily prototype and test new VR Ideas without heavy Plugin Downloads. In this tutorial, you would understand the workings of the toolkit in a simplified way and get set to use in your projects.
img-src: ../assets\images\Blog\uit-unitydev
---


### On this Page
* About the Unity Interaction Toolkit
* Installation of Preview Template
* Features of UIT
* Oculus XR Plugin for UIT
* Mock HMD Plugin for UIT (Use without Headset)
* How to Use in your Project
* Documnetation - About Basic Functionalities
* Feed Back




## About the Unity Interaction Toolkit
The Unity XR Interaction Toolkit is a Package Provided by Unity for creating VR, AR Experiences. It provides a framework that makes VR and UI interactions available from Unity input events(Keyboards, Gamepads, and Controllers, etc.). The core of this system is a set of base Interactor and Interactable components and prefabs and an Interaction Manager that enables the relative working of these two components. It also contains helper components that you can use to extend functionality for drawing visuals and hooking in your interaction events. It can be used in both VR and AR Instances and comes with different functions, scripts, and classes for building gameplay.


The Unity XR Interaction Toolkit is a very new package released in the fall of 2019 to take the place of popular VR and AR Plugins like the HTC Vive Utility Plugin, Oculus VR Plugin, VRTK, etc. The goal is to provide a framework that allows simple integration of different VR SDKs, i.e (Building experiences that can be tailored to different standalone/ VR Headsets without hassles). Without diving into the details - The XR Interaction toolkit works to detect the device plugged in and switches functionality to it solely.

<b>One thing to Note</b> but which isn't the focus of this tutorial is that the XR Interaction Toolkit is part of the XR Plugin Management which in whole refers to all Plugins and SDKs that can be mapped and integrated with the XR Interaction Toolkit for VR Development. Later in this tutorial, We are gonna look at some of them like the Oculus XR Plugin.

Now I can go on with more explanation but, a much better way for you to grasp the whole concept involved is through visualization and hands-on testing. For this reason, In the next section, we look at how to install and open in Unity a Starter template that uses the XR Interaction Toolkit for VR development.


### Installation of Unity's XR Interaction Toolkit Starter Template
Now we are gonna install the Starter Template which we are later going to open in Unity before we can start understanding each component in detail, to begin, follow the steps below or even the Guide video;

1. Download the XR Interaction Toolkit Starter Template from this Repo Link <a href="https://github.com/Unity-Technologies/XR-Interaction-Toolkit-Examples">Link</a>

2. Extract the Folder Using Windows File Explorer or any other third party software

3. After extraction - Copy the VR folder inside the Xr interaction toolkit file out to another location and Rename it e.g Downloads

4. Open up Unity Hub and Click the Add Projects Button - When Prompted select the recent VR project folder you extracted

5. You would need to select a particular unity version for opening this project - Anything from LTS 2019.4 - 2020 versions should work fine.

<video width="320" height="240" class="img-fluid" poster="https://media.giphy.com/media/s3zIaBLqYOpugouDfX/giphy.gif" controls>
  <source src="../assets/video/UIT_guide-vid.mp4" type="video/mp4">
  <source src="../assets/video/UIT_guide-vid1.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

6. When Unity opens fully, Go to Scenes folder in the Projects tab and open the "World Interaction Scene"
If you follow the listed steps correctly, in the scene view you should see something like below. If that isn't the case for you, please leave a comment below and I will be glad to help. Some of the common problems that arise are (pink screen, error in the console, etc).


<img src="../assets/images/Blog/Blog-img/UIT_Opened.png" class="img-fluid responsive">

Now that you have it opened up, we can move on to the more juicy part of this article 😉; Explaining what is happening on the screen and how to set up for a VR project. Let's quickly get down to it


#### Features of UIT (From now on UIT means Unity XR Interaction Toolkit)

By features, what do I mean? I mean this; What can you as a developer achieve with UIT. In this section, I hope to give you a general to specifics scoped idea without anything much as Jargon!.

After Playing around with a few VR SDKs before my recent relationship with Unity's UIT, I had one goal in mind - Build a prototype VR Project. Back then, I used VRTK to test the waters and now I use UIT rather comfortably for someone without previous experience with P_lugins and SDKs integration. My honest opinion is that I love UIT and wish more features can be added to it because it makes building so much easier.

It's fair to say that UIT hasn't reached the level of functionalities VRTK and other SDKs bring to the table but there's one important value VR Developers need called _____ which it has great promise for. Less talk now, let's meet the features of my new best friend.


* Interactors & Interactables: This Point doesn't need much explanation. It's well known that every VR World/experience must have basic interactors(In layman terms - XR Controllers) and Interactables (Objects you can Grab and Select). As for AR, this isn't a requirement because the physics associated with it often involves overlaying objects on surfaces without much need for interaction, which is not to say that in some cases interaction isn't used. 
	* Interactors - UIT achieves this Feature using the <b>Cross-platform XR controller input</b> Component. There are three main functions this provides (Object hover, select, and grab)
	* Interactables - For an object to be an active Interactable, it must have a collection of scripts applied to it - the main being the XR Grab Interactable, XR Direct Interactable, XR Simple Interactable. These three are used differently and of the three, the first is most frequently used.

* A VR Camera Rig: As Expected, when creating VR Experiences, the differentiating factor is a 360-degree world that can be viewed from different angles, as such, what makes this possible is a VR Camera Rig. UIT comes with an XR rig that can be configured for either room or stationary VR. There isn't much talk about this after it has been added to the scene, one important detail to know is that the XR controllers are usually children of this Prefab in the Hierarchy.
NOTE: Once the Sample UIT Package is Successfully set up - You have access to Most components directly from the GameObject Window.

* Teleportation: With UIT, you can set up teleportation using the XR Controller. It Involves a fairly easy process of creating an area/plane and adding the Teloprataion Component to it. This allows the Player to hover over active fields and appear there instantaneously.

* Visual Feedback/ Line rendering: perhaps one of the most exciting aspects of VR. Grabbing objects far away from the player and teleportation. The Line Renderer or Raycaster projects a Line (Color remains Unfixed) from your virtual controllers when you hover around Active fields - What I mean by this, Are you hovering over an Interactable or an area with teleportation set to active? If so, this Indicating Line is projected. By default, the Line Renderer is enabled to constantly project regardless if the state is set to active but this can be fixed with a little code.

* Haptic Feedback: Since Haptics isn't a new term in the VR field, I would avoid divulging deeply into this. Customary, UIT has this feature that can be set up with the XR Controllers for giving a Haptics signals when Certain Events are Triggered in VR

Truly, there are always more features that I decide to not mention here, the above more-important ones are the core of UIT that must be understood while others can be picked up along the way. Dash it all! I have built a working VR Prototype Project with just the core features explained above 🥱. Oh, I promise, More good stuff to come. 

### Oculus XR Plugin for UIT

According to Statista, <a href="statista.com/vr">50% Of VR Developers create VR Games to Publish on the Oculus Store</a>. If this doesn't ring a bell, Well, Nothing might for you. Because Oculus is the fastest-growing Platform both for Developers and Gamers. - For Devs, Revenue - For Gamers, Premium Entertainment (Absolutely Relative). As such, developers at Oculus were quick to get news about Unity's revised plan and created a plugin just for folks adopting the UIT package for VR Development. Today, You are gonna learn about this High-Budget Plugin. 


If you want to create games for Oculus Standalone Headsets or Oculus Go and also plan to use the UIT package, one thing is constant - You need the Oculus XR Plugin. Much of what I talked about above applies to it as well, so you probably do get the hang of what it goes. So now, let's go right into how to install and configure it for the current starter scene in Unity (if you have it open, and not having ignored me this whole time). Follow the Ordered steps below, I won't write it twice:

1. With Unity Opened with the Starter Template on Scene view, you have almost all requirement ready save one

2.  Go to Windows > Package Manager. In PM search for Oculus XR Plugin, Install and wait for it to Import

3. Now go to Edit > Project Settings > XR Plugin Management. inside this section, Check the box - Initialize XR on Startup and Oculus.

4. Further to this, by following this process you are enabling to build on a PC, MAC, or Linus machine. For Android build, switch the tab and enable Oculus there.

That's it! After you complete these steps, you can now "hopefully" run the Game view and experience the scene in VR. Indeed very easy, just my thought too.

The idea here is this, you can play or create any small scene with a few objects directly in Unity, Using the XR Interaction toolkit, by ensuring that a few certain prefabs are present in the Scene! What are they? Where can you find them in?. As we move into the next section we are gonna tackle these questions, that way I kill two birds with a stone. 😎

You now know how to set up UIT with your Oculus Headset but there's one more detail I need to observe - What if you have no Headsets and you just love VR?. I was once in that same position and I can tell you that it's not as impossible as everyone says it is - Developing without a Headset. Unity in part has made this possible with the <b>Mock HMD XR Plugin</b>.


### Unity Mock HMD XR Plugin
In simple terms, the above reference means this - An Head Mounted Display that isn't a real version but mimics how the real version operates. Similar to the Oculus XR Plugin we looked at above, the Mock HMD Display allows you to move and interact in a virtual world without the need for a headset. It collects input actions from the plain old Keyboard, Gamepads, and other input devices. The Mock HMD functions in a similar way to how you'd expect the Oculus XR Plugin to; Basic interactions are mapped similarly with little changes in the input method. To set up a Mock HMD in your Project, follow the same steps that apply for the OCP by of course searching and installing from the package manager; Mock HMD XR. When Installed, don't expect it to work from the onset because there is a little more process involved.

You don't want to be stuck to the starter template without building from scratch. Like I mentioned earlier, some particular prefabs need hooking up together for UIT to be fully integrated into a project, take note of them because they are listed below. Access them by simply searching in the projects tab search;

* XR Rig Demo [Prefab] - Necessary for your scene to be translated into VR 360 degree. It also houses the XR Virtual Controllers and other components that it requires e.g Ray Caster, Line Renderer, etc.

* Input Action Manager [Prefab] - To manage Input Actions from the Keyboard, XR Controller, Gamepad. Etc. This way you can write functions such as - OnButtonDownPressed

* Interaction Manager [Script] - Create an Empty game object and Add the Interaction Manager Script to it. This is for well, managing interactions.

* XR Base Interactor [Script] - Should be added to any game object that you want to be interactable (grab, select, hover)
To get On Button Pressed Event, I might have to use or call the XR Device Simulator function.

* For Use without a Headset, Install the <b>XR Device Simulator</b> from the package manager and add it to the Hierarchy. Some values, keypress mappings need to still be set up before use, watch the video below as this is complicated in itself.

And the list goes On as complexity increases. Now that you have a good solid understanding of the UIT package, focus for 5 minutes on the scene reading prefabs names and viewing their properties in the Hierarchy. It has been a very long Guide and as much as I have tried to make it all well if for instance you prefer or need further assistance through video, Splendid!, I have a video on just this topic.

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/1Iow-Z4bZaU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> Coming Soon....

### Documentations about Unity XR Interaction Toolkit

For In-depth Jargonified analysis and docs, I have provided easy links below to some of the important points taught in this guide:

1. <a href="https://docs.unity3d.com/Packages/com.unity.xr.management@3.2/manual/index.html">XR Plugin Management</a>
2. <a href="https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html">XR Interaction Toolkit</a>
3. <a href="https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html#glossary">XR Interaction Toolkit Glossary</a>
4. <a href="https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html#controllerinteractor">XR Controllers</a>
5. <a href="https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html#using-actions-with-action-based-behaviors">Using Actions with Action-Based Behaviours</a>


#### FEEDBACK
Consequently, after this long tutorial guide, naturally, you should run into a lot of errors, I should highly doubt if you tried this if you say u didn't. I expect your feedback on all these along with how impressive you thought this guide to be. Very commonly said but truly honest as well, 'It helps me prepare better informational guides'. I thank you very much for reading. If you please, watch my tutorial in the video about how to set-up the UIT specifically on a Gamepad.



