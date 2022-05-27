from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
import h11
from sklearn.metrics.pairwise import cosine_similarity  
import pickle
import numpy as np
import pandas as pd
from flask.views import MethodView
from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
import jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
api=Api(app)


parser = reqparse.RequestParser()
parser.add_argument('query')

dataset=pd.read_csv('datacomp2 2.3.csv')


count = CountVectorizer(stop_words=None)


def clean_data(x):
      
    if isinstance(x, str):
        return str.lower(x.replace(",", " "))
    else:
        return ''

features = ['Genres']

for feature in features:
    dataset[feature] = dataset[feature].apply(clean_data)

def soup(x):
    return x['Genres'] + ' ' + x['Artist']
dataset['soup'] = dataset.apply(soup, axis=1)
matrix=count.fit_transform(dataset['soup'])
cosine_sim2 = cosine_similarity(matrix, matrix)




def find_title_from_index(index):
    return dataset[dataset.index == index]["aTitle"].values[0]
def get_recommendations(title, cosine_sim=cosine_sim2):
        if title not in dataset['aTitle'].unique():
            return "Not in Database","Not in Database"
        else:
            i=dataset.loc[dataset['aTitle']== title].index[0]
            lst = list(enumerate(cosine_sim[i]))
            lst= sorted(lst,key=lambda x:x[1],reverse=True)
            lst = lst[1:6]
            songindex = [i[0] for i in lst] #songs index
            return dataset['aTitle'].iloc[songindex], songindex           
        

class Recommendation(Resource):
    def get(self):
        args = parser.parse_args()
        user_query = args['query']
        
        
        pred,index = get_recommendations('Sucker')
        print(pred)
        #json with list of songs(indices)
        
        output = {"prediction1": pred[index[0]],
        "prediction2": pred[index[2]],
        
            }
       
        return output



api.add_resource(Recommendation, '/','/x')


if __name__ == '__main__':
    app.run(debug=True)
