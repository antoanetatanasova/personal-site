import React from 'react';

const RecentArticleComponent = () => {
    return (
        <article className="recent-article">
                <h4>Recent Publication:</h4>
            <div className="recent-article-wrapper">
                <h2>Military Reforms as a Diplomatic Bargaining Chip</h2>
                <h3>French-Ottoman Relations at the End of the Eighteenth Century</h3>
                <h5>in: European Revolutions and the Ottoman Balkans Nationalism, Violence and Empire in the Long Nineteenth-Century, Editor: Dimitris Stamatopoulos</h5>
                <button className="btn"><a href="https://www.bloomsbury.com/uk/european-revolutions-and-the-ottoman-balkans-9780755603282/"><i class="fas fa-info-circle"></i>More Info</a></button>
                <button className="btn"><a href="https://books.google.bg/books?hl=en&lr=&id=wWjDDwAAQBAJ&oi=fnd&pg=PA65&ots=MAUAUK229u&sig=XpWo7E4YHIgI1MMlnKe_KWHZk_0&redir_esc=y#v=onepage&q&f=false"><i class="fab fa-readme"></i>Read It</a></button>
            </div >
        </article >
    );
}

export default RecentArticleComponent;