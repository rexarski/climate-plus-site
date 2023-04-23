---
sidebar_position: 4
---

# 2.4 Fixing `climate_fever`

[`climate_fever`](https://huggingface.co/datasets/climate_fever) is a dataset of climate-related documents that have been annotated with labels related to fact-checking and misinformation. However, in the `climate-plus` project, we decided to modify the dataset to remove redundancy and keep only the essentials of a text-entailment problem: **claim** as the premise and **evidence** as the hypothesis.

For each given claim, there are multiple sentences of evidence. We decided to expand the one-to-many relation to one-to-one. This resulted in a modified version of the `climate_fever` dataset that includes only one evidence sentence per claim.

We also split the dataset into train, validation, and test sets to enable proper evaluation of the climate-plus model. The modified dataset was then pushed to the Hugging Face like last time.

The dataset is available at [`rexarski/climate_fever_fixed`](https://huggingface.co/datasets/rexarski/climate_fever_fixed).

## Related files

- `utils/climate_fever_uploader.py`
