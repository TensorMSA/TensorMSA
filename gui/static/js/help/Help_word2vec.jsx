import React from 'react'
import ReportRepository from './../repositories/ReportRepository'
import Api from './../utils/Api'
import EnvConstants from './../constants/EnvConstants';

export default class Help_word2vec extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
        	NN_TableData: null,
            url1:EnvConstants.getImgUrl()+"help_word2vec1.png",
            url2:EnvConstants.getImgUrl()+"help_word2vec2.png"
        };

    }
    /////////////////////////////////////////////////////////////////////////////////////////
    // Search Function
    /////////////////////////////////////////////////////////////////////////////////////////
    componentDidMount() {
    }

    render() {
        return (  

            <div>
                <h1> Word2Vec </h1>
                
                <div className="container tabBody">
        <img src={this.state.url1} />
                    <br />
                <br />
                <h3>

                기본적으로 컴퓨터가 어떤 단어에 대해 인지할 수 있게 하기 위해서는 수치적인 방식으로 단어를 표현할 수 있어야 한다. <br />
                그러나 앞서 말했듯이, 수치화를 통해 단어의 개념적 차이를 나타내기가 근본적으로 힘들었다. <br />
                이 한계를 극복하기 전의 NLP는 ‘one-hot encoding’ 방식을 많이 사용했다. 예를 들어, 내가 어떤 단어들이 있는지에 대한 <br />
                단어 n개짜리 ‘사전’ (Dictionary)이 있다고 해보자. 이 때, 어떤 단어를 표현하기 위해서 길이 n짜리 벡터를 하나 만들고,<br />
                그 단어가 해당되는 자리에 1을 넣고 나머지 자리들에는 0을 넣는 것이다. 사전이 [감자, 딸기, 사과, 수박] 이라면 사과를 표현하는 <br />
                벡터는 [0, 0, 1, 0] 이 되는 식이다.
                Naive Bayes를 이용한 스팸 분류기가 이 방법을 사용하는 전형적인 예시라고 생각할 수 있겠다. <br />
                단어 자체를 벡터화한 것은 아니지만, 이 경우 이메일 전체를 보면서 어떤 단어가 있으면 1, 없으면 0으로 나타내는 식으로 이메일 <br />
                하나에 대한 벡터를 만든다. <br />
                이 방식은 당시에는 나름 좋은 성능을 내었고, 지금까지도 사용하는 사람들이 있지만 컴퓨터 자체가 ‘단어가 본질적으로 다른 단어와 <br />
                어떤 차이점을 가지는 지 이해할 수가 없다’ 는 아주 큰 단점이 존재한다.<br />
                이러한 단점을 존재하기 위해 연구자들은 단어 자체가 가지는 의미 자체를 다차원 공간에서 ‘벡터화’ 하는 방식을 고안하게 되었다. <br />
                단어의 의미 자체를 벡터화할 수 있게 된다면, 기본적으로 이것을 사용해서 할 수 있는 일들이 굉장히 많아진다.<br />
                그렇다면, ‘어떻게 각 단어를 벡터화해야 하는가?’ 에 대한 문제가 관건이 될 것이다. 놀랍게도 이렇게 단어를 벡터화하는 방법 자체는 <br />
                정말 예전부터 이루어져왔던 연구이다. 현재 ‘CBOW’와 ‘Skip-gram’ 이라는 아키텍쳐로 다시 한번 발전하여 현재 word2vec의 
                모양새로 이어지게 되었다.<br />
</h3>
<img src={this.state.url2} />
<br />
<br />
<h3>
                Word2Vec 는 기본적으로 유사한 의미를 갖는 단어는 비슷한 문맥에서 등장한다는 이론을 바탕에 두고 있다. <br />
                예를들면 (음식)을 먹는다. 형태의 문맥이 있다고 하면 “사과를 먹는다. 포도를 먹는다. 밥을 먹는다. <br />
                모든 문장은 먹는다와 근처에서 발생하게 된다. 이러한 특징을 바탕으로 백터를 훈련하면 유사한 의미를 갖는 단어들은 유사한 <br />
                백터 분포를 갖는다라고 말한다. <br />
                Word Embedding 기법은 모든 자연어 처리 알고리즘에 있어서 가장 중요한 전처리 작업으로 최근에는 전체 도큐먼트의 발생 빈도를 <br />
                고려하는 Glove나 Ngram 방법을 접목한 FastText 등이 주로 사용되고 있으며, 순수한 Word2Vector 알고리즘 자체는 <br />
                잘 사용하지 않는 추세이긴 하지만 매우 중요한 개념이라는 것은 변함 없다.<br />

</h3>
                </div>
            </div>
        )
    }
}


