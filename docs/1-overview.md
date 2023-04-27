---
sidebar_position: 2
---

# 1. Overview

![logo](../static/img/logo.png)

Hello and welcome to our multi-part blog post on our work-in-progress project, [climate-plus](https://github.com/rexarski/climate-plus). In this project, we aim to extend the functionality of a research paper called [*ClimateBert: A Pretrained Language Model for Climate-Related Text*](https://arxiv.org/abs/2110.12010). The authors of the paper created a transformer-based language model called [ClimateBERT](https://huggingface.co/climatebert/distilroberta-base-climate-f), which has been fine-tuned on various downstream tasks related to climate-related text. These tasks include detecting climate content in text files, assessing the sentiment of this content, and fact-checking climate-related claims, among others.

## Problems We Tackled

ClimateBERT presents an innovative approach to solving climate-related problems by applying the large language models (LM) that have achieved wild success in the past few years in the NLP field. By specifically training a LM for these tasks, the team created a model that is vastly superior at performing a range of downstream climate-related tasks. We built upon this model to solve two specific downstream problems identified in this paper:

**Problem 1**: Although the team achieved relative success at Fact Checking climate-related claims, they provide no code base or any documentation for their final model. Our team will design and implement a similar approach to improve upon their design, potentially even posing it at an Information Retrieval (IR) problem.

**Problem 2**: The ClimateBERT research team claims that their model has been fine-tuned for a total of six downstream NLP tasks. However, many of these tasks are not discussed in their latest research paper. With that in mind, our goal is to focus on one of the downstream tasks that were not addressed: assigning a climate disclosure category to climate-related content based on four categories defined by the [Task Force on Climate-related Financial Disclosures (TCFD)](https://www.fsb-tcfd.org/recommendations/).

The primary goal of `climate-plus` is to replicate ClimateBERT's functionality while exploring different approaches to training the model when computational resources are limited.
