---
layout: post-blog
author: Chel
title: Comparing the Various VR SDks Plugins to give you a Headstart in VR development - By Oulining thier Advantages and Disadvantages
seo: steamvr openxr openvr unity plugins unity vr development oculus vr hand tracking oculus integration oculus vr unity oculus game development oculus software vr tools vr software vr development vr sdks
description: Starting VR Game Development is a thrill, and at the same time a cold chilling ordeal. You want to make beautiful games, you are confident of your creative abilities, one little hitch though - you have no idea where to start, what to use, or even why to use them. In this tutorial, i drastically simplify the entire process in my most preferred way of communication - layman terms.
img-src: ../assets\images\Blog\sdks-unitydev
---

Starting VR Game Development is a thrill, and at the same time a cold chilling ordeal. You want to make beautiful games, you are confident of your creative abilities, one little hitch though - you have no idea where to start, what to use, or even why to use them. In this tutorial, i drastically simplify the entire process in my most preferred way of communication - layman terms. Are you with me?, well, then Read On!.


### On this Page
* VR Sdks ?, What are they?
* How many Plugins do we have?
* Comparing One against Another
* Selecting Unity VR Plugin for VR Dev
* Feedback


### What are VR SDKs/Plugins?

NOTE: This post is focused on implementation with the Unity 3d engine as it is best suited for beginners (from experience). if by chance, you heart lies with Unreal, worry not, the plugins name can be easily tewaked for Unreal Engine. You would understand better my meaning as we progress.

You have no doubt heard constantly about VR Sdks and plugins. As a beginner to Vr development, perhaps with no previous experience with APIs and Plugins, these terms might all seem very strange and confusing to you. The good news for you is that it shouldn't anymore after reading this article, my goal is to simplify the idea around them in simple words.

VR Sdks (Virtual Reality Software Developement Kits) are a collection of scripts (Long gist of Codes), prefabs, components, and packages, i.e all accumulated into one single Unity "Asset" - the purpose being to make the building of VR experiences easier for the end user. Let's take a different perspective to understand better;

In a Virtual reality Game or Experience, We (Users) can involve in a lot of basic to advanced interactions, most similar to how our natural behaviour in the realworld, exampole are (looking around yourself, walking, running, picking, grabbing and throwing objects) - All these we can do in a VR world, Normal 3d games are limited to devices. The fact that these new actions mentioned above are possible in VR means there must be new ways to create them, and usually the efforts and coding skills required is too advanced for the majority of developers like you are me ..... And we have VR SDKs ; Simply a set of predefined scripts that aid us in developing. This approach should give you a much better idea of the whole concept.





### How many Plugins do we have

In Unity, there are several SDKs for VR development, the reason being to accomodate support for various headserts and controller. As new brands release their own unique vr headsets, we see inevitably the introduction of their own personal SDK published to simply the development process for their own unique platform. Some SDKs support a wide range of headsets while others doesn't. We are going to talk about this two variations and what SDKs exist fofr them;

Right now, I can't say accurately how many SDKs for the Un ity Platforms, probably because one is usua;lly released every now and then, but for sure, we have some popular ones common among majority of developers:

1. Open VR Unity Plugin: OpenVR is a software development kit (SDK)developed by Valve for supporting the SteamVR (HTC Vive) and other virtual reality headset (VR) devices.(Meaning that Using Open XR in Unity for VR Dev, all other headsets can access VR content created with it) The SteamVR platform uses it as the default application programming interface (API) and runtime. It handles display, tracking, and input for Open VR devices. 

2. Steam VR Unity Plugin: 


3. Unity XR Interaction Toolkit: The Unity XR Interaction Toolkit is a Package Provided by Unity for creating VR, AR Experiences. It provides a framework that makes VR and UI interactions available from Unity input events(Keyboards, Gamepads, and Controllers, etc.). The core of this system is a set of base Interactor and Interactable components and prefabs and an Interaction Manager that enables the relative working of these two components. It also contains helper components that you can use to extend functionality for drawing visuals and hooking in your interaction events. It can be used in both VR and AR Instances and comes with different functions, scripts, and classes for building gameplay. 

The Unity XR Interaction Toolkit is a very new package released in the fall of 2019 to take the place of popular VR and AR Plugins like the HTC Vive Utility Plugin, Oculus VR Plugin, VRTK, etc. The goal is to provide a framework that allows simple integration of different VR SDKs, i.e (Building experiences that can be tailored to different standalone/ VR Headsets without hassles). Without diving into the details - The XR Interaction toolkit works to detect the device plugged in and switches functionality to it solely.

Among Plugins listed, the UIT is currently the easiest way to build VR Experiences, while not the most feasible as it's still in preview release but holds unity support fully. For Developers completely new to VR dev and aiming for a fast progress, this package can be used to familarise with. It aslo supports integration of third party SDKs found on the unity assets store to build realistic experiences. To get started with this, read this guide <a href="">Unity XR Toolkit - Important points to Note</a>

4. VRTK: VRTK is a collection of useful, reusable solutions to common problems found when building for virtual reality. VRTK aims to help productivity by speeding up the creation process from prototyping ideas to building complete solutions.

The VRTK Unity Plugin brings a whole lot of functionalities in a Drag-and-Drop System. It allows compatibility with a set of popular VR SDks like Oculus Plugin, Steam VR Plugin and even for Open VR.
The full list of Compatible Unity VR Plugins with VRTK and their Uses are listed below;

1. Oculus VR SDK: For Targeting Oculus VR Headsets(Quest, Quest2)
2. Steam VR SDK: For Targeting Steam VR (SteamVR Platform on Steam)
3. DayDream VR SDK: For Targeting DayDream VR Headsets(Google Daydream)
4. Windows MR SDK: For Targeting Windows Mixed Reality
5. HyperReal VR SDK
6. Simulator SDK: As a Mock HMD, VR without a Headset
7. Ximmerse SDK

If you wanna explore deeper using VRTK, ensure to follow this guide, take it from me - there are countless errors to run into <a href="">VRTK for Vr Development</a>

5. Oculus Integration Plugin:


6. HTC Vive Unity Plugin: 

7. Open XR Unity Plugin: I left this for the least Plugin so as not to casue confusion among readers. Do you feel like we already mentioned this?. Go ahead and scroll up to identify the Difference.

...

Yhh!. The former is the Open 'VR' Plugin and this is the Open 'XR'. So what's the difference. Very Simple; The Open XR must be used with Unity's new XR Plugin Managemnet. Confused?, Pls don't be. let me shed some light.

Unity alas, has chosen to refer to VR content as XR, since they strongly believe their engine is more than capable for building AR experiences. So instead of lone VR, it's now refereed to as XR. The Plugin Management is really just straight forward: The Plugoin Management. A way to manage the various plugins installed in a unity project. The image below shows how this management system looks. It basically checks and unchecks boxes to notify you of which XR Plugin installed is currently active. One of the main purpose of this system is to enhance "multi-platform development and publishing", i.e When you are targeting several VR hardware for your content, you can install thier individual Sdks and manage it with the Plugin Manager. 


Now why leave this important infoprmation for the last part, because there's a whole new world for you to uncover?, Or just Read? 😶. That's where the Open XR comes in, practically invades.
<b>The Open XR Plugin</b> is one of those sdks that can be used with the XR Plugin Management and what is it?

It's shares similarities with the Open VR Plugin in that it can be used for multi-platform development. It supports head tracking, display but... it ends there. Yhh, this is a relatively new plugin, still in preview mode and no suitable interaction/input system method(grabbing, throwing, teleportation) is currently supported. It can be used by itself, or integrated with steam vr for full input support. Still, you can choose for hooking up input systems between the input Steam VR Plugin or Unity XR Interaction toolkit. Only one can be used at a time, both aren't compatible. A detailed guide is coming soon on how to set this up on unity, but if you want to test the waters urself, you can follow this link to downlaod the preview version <a href="">Open XR Unity SDK</a>.

### XR Plugin Managemnet Compatible SDKs 
After briefing on the XR Managemnet and how Open XR is compatible with it, I want to pass across and important point to note:

By using the XR Plugin Management, You CANT use Standalone SDKs like (Steam VR, Oculus VR, Open VR etc). And likewise, by using any of the standalone SDKs you can make use of the XR Plugin Managemnet Tool in your Project. You either use one. Open XR as we have seen is a compatible plugin, what other sdks exist that are compatible, below they are listed with a singular way of installing them;

1. Oculus XR Plugin
2. Windowsmr XR Plugin
3. Mock HMD XR Plugin
4. Oculus Android Plugin

The common way to install them among your project's package is Goto Windows > Package Manager > Search for Individual Names > Click Install in the bottom rigth corner.


After this detailed summary of the various VR SDKs/ XR SDKs, can you Identify those requiring usage for a special hardware and those that can be used for multiple platform development. If you can't, I've totally failed as a developer and writer 🤔. Ah, let's leave that for later, we shall see



### Which of Them?

You read enough, infact you deserve a congratulatory message, drop your email and that would be attended to. I mean, you've read enough of them theory, your teeth must be craving for just some practice. Lucky, I made necessary plans for that. Among the various SDKs Listed, you probably have a favourite already, but is that the most suited for you. Read On, In this section, we talk about choosing a SDK to start Development with in consideration of some Factors

The easiest SDK: UIT
The most profitable: Open XR & Open VR
Suited for Professionals: Steam VR & Oculus VR
Unity Recommendation: Possibly Open XR 
