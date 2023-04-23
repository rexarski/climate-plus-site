---
sidebar_position: 2
---

# 2.2 Extracting evidence from TCFD reports

In this section, we will discuss how we extracted evidence from the TCFD disclosure classification dataset using a tool called [`chitchat`](https://github.com/rexarski/chitchat). `chitchat` is a **Question Answering in Context (QuAC)** gpt-3.5-based tool that takes multiple files as input and outputs answers based on the context.

![Streamlit app of chitchat](https://github.com/rexarski/chitchat/raw/st-multi/img/streamlit.jpg)

Since each file we scraped has a variable number of pages, it was difficult for us to use them directly as the context for chitchat. To solve this problem, we used [`FAISS`](https://github.com/facebookresearch/faiss) to find the top K most similar text chunks in the file and parsed them as the context.

For classification, we used all 11 sub-categories mentioned on Page 112 of [*Task Force on Climate-related Financial Disclosures 2022 Status Report*](https://assets.bbhub.io/company/sites/60/2022/10/2022-TCFD-Status-Report.pdf) and their corresponding AI review questions. These questions were then packed into our prompt and used to generate answers based on the context.

| Number | Question                                                                                                                                                    | Recommended Disclosure |
| :----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
|   1    | Does the company describe the board’s or a board committee’s oversight of climate-related risks or opportunities?                                           | Governance a)          |
|   2    | Does the company describe management’s or a management committee’s role in assessing and managing climate-related risks or opportunities?                   | Governance b)          |
|   3    | Does the company describe the climate-related risks or opportunities it has identified?                                                                     | Strategy a)            |
|   4    | Does the company describe the impact of climate-related risks and opportunities on its businesses, strategy, or financial planning?                         | Strategy b)            |
|   5    | Does the company describe the resilience of its strategy, taking into consideration different climate-related scenarios, including a 2°C or lower scenario? | Strategy c)            |
|   6    | Does the company describe its processes for identifying and/or assessing climate-related risks?                                                             | Risk Management a)     |
|   7    | Does the company describe its processes for managing climate-related risks?                                                                                 | Risk Management b)     |
|   8    | Does the company describe how processes for identifying, assessing, and managing climate-related risks are integrated into overall risk management?         | Risk Management c)     |
|   9    | Does the company disclose the metrics it uses to assess climate-related risks or opportunities?                                                             | Metrics a)             |
|   10   | Does the company disclose Scope 1 and Scope 2, and, if appropriate Scope 3 GHG emissions?                                                                   | Metrics b)             |
|   11   | Does the company describe the targets it uses to manage climate-related risks or opportunities?                                                             | Metrics c)             |

Using this approach, we were able to extract relevant evidence from the TCFD reports and prepare the data for classification using the climate-plus model.

In the next part of this series, we will discuss the text preprocessing steps we used to prepare the data for training and evaluation.

## Related files

- `utils/pdf_parser.ipynb`
- `chitchat_wip/prompts.py`
- `chitchat_wip/tcfd_preparer.py`
- `config-template.ini`
