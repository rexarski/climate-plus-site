---
sidebar_position: 1
---

# 3.1 Downstream task 1: factchecking

One of the downstream tasks we focus on is factchecking climate-related claims. But instead of going through the details, we would like to briefly talk about why it is important.

**Misinformation**, especially about climate change, is a serious problem, that can be spread quickly and directly impact public opinion and policy decisions. Furthermore, misinformation is difficult to combat, and verifiable on biased sources.

To distinguish our work from the prior work, we used BERT as the base model instead of DistilRoBERTa. We fine-tuned the model on the modified `climate_fever_fixed` dataset to perform the factchecking task. The model achieved <mark>65%</mark> of validation accuracy.

A couple of possible explanations for this rather lower performance are:

1. **Limited computation power**. Our model was trained on a free version of Google Colab GPU for 30 minutes. In comparison, ClimateBERT was [trained on two NVIDIA RTX A5000 GPUs for 48 hours](https://huggingface.co/climatebert/distilroberta-base-climate-f).
2. **Training data limitation**. In the latest draft of their research paper, DistilRoBERTa was trained on more than 2 million paragraphs, while ours was trained on approximately 4,000 (claim, evidence) pairs. This may have led to underfitting and reduced performance on the validation set.
3. **Complexity of the factchecking task**. Factchecking climate-related claims is a complex task that requires a deep understanding of both the language used in the claims and the underlying science of climate change. Our model may not have had sufficient capacity to fully capture this complexity for now.

The factchecking side quest of `climate-plus` project is an experimental replication of current research in climate-related language modeling. Our goal was not to exceed the benchmark set by the ClimateBERT model but rather to explore alternative approaches to fine-tuning transformer-based language models with limited computational resources. While the model achieved *some promising (?)* results on the factchecking task, we acknowledge the limitations of our approach and recognize that there is still much room for improvement.

The model is accessible at [`rexarski/bert-base-climate-fever-fixed`](https://huggingface.co/rexarski/bert-base-climate-fever-fixed).

## Related files

- `trainer/factchecking_trainer.ipynb`
- `trainer/factchecking_test.ipynb`
- `minipackage/factcheck.py`
