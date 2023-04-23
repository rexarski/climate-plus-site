---
sidebar_position: 2
---

# 1. Overview

![logo](../static/img/logo.png)

Hello and welcome to our multi-part blog post on our work-in-progress project, [climate-plus](https://github.com/rexarski/climate-plus). In this project, we aim to extend the functionality of a research paper called [*ClimateBert: A Pretrained Language Model for Climate-Related Text*](https://arxiv.org/abs/2110.12010). The authors of the paper created a transformer-based language model called [ClimateBERT](https://huggingface.co/climatebert/distilroberta-base-climate-f), which has been fine-tuned on various downstream tasks related to climate-related text. These tasks include detecting climate content in text files, assessing the sentiment of this content, and fact-checking climate-related claims, among others.

The ideal use cases for this project include, but are not limited to, analyzing climate-related text, fact-checking climate-related claims, and assigning a climate disclosure category based on the recommendations of the [Task Force on Climate-related Financial Disclosures (TCFD)](https://www.fsb-tcfd.org/publications/).

The primary goal of `climate-plus` is to replicate ClimateBERT's functionality while exploring different approaches to training the model when computational resources are limited.
