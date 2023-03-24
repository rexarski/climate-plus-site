import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Climate fact-checking',
        Svg: require('@site/static/img/undraw_factcheck.svg').default,
        description: (
            <>
                ✅ <code>climate-plus</code> was designed from the ground up to
                improve fact-checking performance on climate-related claims.
            </>
        ),
    },
    {
        title: 'Disclosure classification',
        Svg: require('@site/static/img/undraw_classification.svg').default,
        description: (
            <>
                💎 <code>climate-plus</code> assigns a category to the content
                based on the 4 categories of the recommendations of the{' '}
                <a href="https://www.fsb-tcfd.org/publications/">
                    Task Force on Climate-related Financial Disclosures (TCFD)
                </a>
                .
            </>
        ),
    },
    {
        title: 'Open source',
        Svg: require('@site/static/img/undraw_open_source.svg').default,
        description: (
            <>🤗 Sharing PyTorch model on HuggingFace with the community.</>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
