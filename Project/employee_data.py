from collections import Counter
import pandas as pd
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.survey_database


jsonFile = 'data.json'
f = open('federal_survey2015.csv', "r")
df = pd.read_csv('federal_survey2015.csv')
path = 'data.json'
df.to_json(path, orient='records')


def question72(qNo):
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    empWorkLifeDict = dict()

    empWorkLifeDict['notified_eligible'] = json_Type[1]
    empWorkLifeDict['notified_Not_eligible'] = json_Type[2]
    empWorkLifeDict['not_notified'] = json_Type[3]
    empWorkLifeDict['not_sure'] = json_Type[4]

    question72 = db.question72
    question72_id= question72.insert_one(empWorkLifeDict)
    return empWorkLifeDict


def question73(qNo):
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    empWorkLifeDict = dict()

    empWorkLifeDict['notified_eligible'] = json_Type[1]
    empWorkLifeDict['notified_Not_eligible'] = json_Type[2]
    empWorkLifeDict['not_notified'] = json_Type[3]

    question73 = db.question73
    question73_id = question73.insert_one(empWorkLifeDict)

    return empWorkLifeDict


def work_life_set1(start, end):
    data = {}
    s_data = dict()
    totalRange = (end - start) + 1
    if totalRange == 0:
        totalRange = 1
    globalCnt = Counter()
    for i in range(start, end + 1):
        questionNo = 'Q' + str(i)
        s_data[questionNo] = df[questionNo]
        data['response'] = s_data
        cnt = Counter()
        collection = data

        for x in collection['response'][questionNo]:
            if not pd.isnull(x):
                cnt[x] += 1
        globalCnt += cnt

    json_Type = globalCnt

    empWorkLifeDict = dict()

    empWorkLifeDict['Yes'] = json_Type[1] / totalRange
    empWorkLifeDict['No'] = json_Type[2] / totalRange
    empWorkLifeDict['Not_Available'] = json_Type[3] / totalRange

    work_life_set1= db.work_life_set1
    work_life_set1_id = work_life_set1.insert_one(empWorkLifeDict)

    return empWorkLifeDict



def work_life_set2(start, end):
    data = {}
    s_data = dict()
    totalRange = (end - start) + 1
    if totalRange == 0:
        totalRange = 1
    globalCnt = Counter()
    for i in range(start, end + 1):
        questionNo = 'Q' + str(i)
        s_data[questionNo] = df[questionNo]

        data['response'] = s_data
        cnt = Counter()
        collection = data

        for x in collection['response'][questionNo]:
            if not pd.isnull(x):
                cnt[x] += 1
        globalCnt += cnt

    json_Type = globalCnt
    empWorkLifeDict = dict()

    empWorkLifeDict['very_Dissatisfied'] = json_Type['1'] / totalRange
    empWorkLifeDict['dissatisfied'] = json_Type['2'] / totalRange
    empWorkLifeDict['neutral'] = json_Type['3'] / totalRange
    empWorkLifeDict['satisfied'] = json_Type['4'] / totalRange
    empWorkLifeDict['very_Satisfied'] = json_Type['5'] / totalRange
    empWorkLifeDict['no_Basis'] = json_Type['X'] / totalRange

    work_life_set2 = db.work_life_set2
    work_life_set2_id = work_life_set2.insert_one(empWorkLifeDict)

    return empWorkLifeDict


def employee_satisfaction():
    start = 63
    end = 71
    data = {}
    s_data = dict()
    totalRange = (end - start) + 1
    if totalRange == 0:
        totalRange = 1
    globalCnt = Counter()
    for i in range(start, end + 1):
        questionNo = 'Q' + str(i)
        s_data[questionNo] = df[questionNo]

        data['response'] = s_data
        cnt = Counter()
        collection = data

        for x in collection['response'][questionNo]:
            if not pd.isnull(x):
                cnt[x] += 1
        globalCnt += cnt

    json_Type = globalCnt
    empSatifcationDict = dict()

    empSatifcationDict['very_Dissatisfied'] = json_Type[1] / totalRange
    empSatifcationDict['dissatisfied'] = json_Type[2] / totalRange
    empSatifcationDict['neutral'] = json_Type[3] / totalRange
    empSatifcationDict['satisfied'] = json_Type[4] / totalRange
    empSatifcationDict['very_Satisfied'] = json_Type[5] / totalRange

    employee_satisfaction = db.employee_satisfaction
    employee_satisfaction_id = employee_satisfaction.insert_one(empSatifcationDict)


def supervisor_set1(start, end):
    data = {}
    s_data = dict()
    totalRange = (end - start) + 1
    if totalRange == 0:
        totalRange = 1
    globalCnt = Counter()
    for i in range(start, end + 1):
        questionNo = 'Q' + str(i)
        s_data[questionNo] = df[questionNo]

        data['response'] = s_data
        cnt = Counter()
        collection = data

        for x in collection['response'][questionNo]:
            if not pd.isnull(x):
                cnt[x] += 1
        globalCnt += cnt

    json_Type = globalCnt
    supervisorDict = dict()

    supervisorDict['strongly_disagree'] = json_Type['1'] / totalRange
    supervisorDict['disagree'] = json_Type['2'] / totalRange
    supervisorDict['neutral'] = json_Type['3'] / totalRange
    supervisorDict['agree'] = json_Type['4'] / totalRange
    supervisorDict['strongly_agree'] = json_Type['5'] / totalRange
    supervisorDict['not_sure'] = json_Type['X'] / totalRange

    supervisor_set1 = db.supervisor_set1
    supervisor_set1_id = supervisor_set1.insert_one(supervisorDict)


def appraisal():
    qNo = 15
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    appraisalDict = dict()

    appraisalDict['strongly_disagree'] = json_Type['1']
    appraisalDict['disagree'] = json_Type['2']
    appraisalDict['neutral'] = json_Type['3']
    appraisalDict['agree'] = json_Type['4']
    appraisalDict['strongly_agree'] = json_Type['5']
    appraisalDict['not_sure'] = json_Type['X']

    appraisal = db.appraisal
    appraisal_id = appraisal.insert(appraisalDict)



def supervisor_set2(start, end):
    data = {}
    s_data = dict()
    totalRange = (end - start) + 1
    if totalRange == 0:
        totalRange = 1
    globalCnt = Counter()
    for i in range(start, end + 1):
        questionNo = 'Q' + str(i)
        s_data[questionNo] = df[questionNo]

        data['response'] = s_data
        cnt = Counter()
        collection = data

        for x in collection['response'][questionNo]:
            if not pd.isnull(x):
                cnt[x] += 1
        globalCnt += cnt

    json_Type = globalCnt
    supervisorDict = dict()

    supervisorDict['strongly_disagree'] = json_Type[1] / totalRange
    supervisorDict['disagree'] = json_Type[2] / totalRange
    supervisorDict['neutral'] = json_Type[3] / totalRange
    supervisorDict['agree'] = json_Type[4] / totalRange
    supervisorDict['strongly_agree'] = json_Type[5] / totalRange

    supervisor_set2 = db.supervisor_set2
    supervisor_set2_id = supervisor_set2.insert_one(supervisorDict)


def question52(qNo):
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    supervisorDict = dict()

    supervisorDict['very_Poor'] = json_Type[1]
    supervisorDict['poor'] = json_Type[2]
    supervisorDict['fair'] = json_Type[3]
    supervisorDict['good'] = json_Type[4]
    supervisorDict['very_Good'] = json_Type[5]

    question52 = db.question52
    question52_id = question52.insert(supervisorDict)


def manager_sentiment():
    qNo= 60
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    managerDict = dict()

    managerDict['very_Poor'] = json_Type[1]
    managerDict['poor'] = json_Type[2]
    managerDict['fair'] = json_Type[3]
    managerDict['good'] = json_Type[4]
    managerDict['very_Good'] = json_Type[5]

    question60 = db.question60
    question60_id = question60.insert(managerDict)

    return managerDict


def career_growth():
    start = 1
    end = 8
    data = {}
    s_data = dict()
    totalRange = (end - start) + 1
    if totalRange == 0:
        totalRange = 1
    globalCnt = Counter()
    for i in range(start, end + 1):
        questionNo = 'Q' + str(i)
        s_data[questionNo] = df[questionNo]

        data['response'] = s_data
        cnt = Counter()
        collection = data

        for x in collection['response'][questionNo]:
            if not pd.isnull(x):
                cnt[x] += 1
        globalCnt += cnt

    json_Type = globalCnt
    careerGrowthDict = dict()

    careerGrowthDict['strongly_disagree'] = json_Type[1] / totalRange
    careerGrowthDict['disagree'] = json_Type[2] / totalRange
    careerGrowthDict['neutral'] = json_Type[3] / totalRange
    careerGrowthDict['agree'] = json_Type[4] / totalRange
    careerGrowthDict['strongly_agree'] = json_Type[5] / totalRange

    career_growth = db.career_growth
    career_growth_id = career_growth.insert_one(careerGrowthDict)


def supervisor_sentiment():
    question52(52)
    supervisor_set1(42, 47)
    supervisor_set2(48, 51)


def work_unit_sentiment():
    qNo = 28
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    workUnitDict = dict()

    workUnitDict['very_poor'] = json_Type[1]
    workUnitDict['poor'] = json_Type[2]
    workUnitDict['fair'] = json_Type[3]
    workUnitDict['good'] = json_Type[4]
    workUnitDict['very_good'] = json_Type[5]

    work_unit_sentiment = db.work_unit_sentiment
    question28_id = work_unit_sentiment.insert(workUnitDict)

    return workUnitDict


def work_life_balance():
    jsonOut_Set1 = work_life_set1(74, 78)
    jsonOut_Set2 = work_life_set2(79, 84)
    jsonOut_q72 = question72(72)
    jsonOut_q73 = question73(73)
    jsonOut_q60 = manager_sentiment()


def survey_viability():
    qNo = 41
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    surveyViabilityDict = dict()

    surveyViabilityDict['strongly_disagree'] = json_Type['1']
    surveyViabilityDict['disagree'] = json_Type['2']
    surveyViabilityDict['neutral'] = json_Type['3']
    surveyViabilityDict['agree'] = json_Type['4']
    surveyViabilityDict['strongly_agree'] = json_Type['5']
    surveyViabilityDict['not_sure'] = json_Type['X']

    survey_viability = db.survey_viability
    survey_viability_id = survey_viability.insert(surveyViabilityDict)


def promotion_sentiment():
    qNo = 22
    data = {}
    s_data = dict()
    questionNo = 'Q' + str(qNo)
    s_data[questionNo] = df[questionNo]
    data['response'] = s_data
    cnt = Counter()
    collection = data
    for x in collection['response'][questionNo]:
        if not pd.isnull(x):
            cnt[x] += 1

    json_Type = cnt
    promotionDict = dict()

    promotionDict['strongly_disagree'] = json_Type['1']
    promotionDict['disagree'] = json_Type['2']
    promotionDict['neutral'] = json_Type['3']
    promotionDict['agree'] = json_Type['4']
    promotionDict['strongly_agree'] = json_Type['5']
    promotionDict['not_sure'] = json_Type['X']

    promotion_sentiment = db.promotion_sentiment
    promotion_sentiment_id = promotion_sentiment.insert(promotionDict)


def main():
    work_life_balance()
    employee_satisfaction()
    supervisor_sentiment()
    manager_sentiment()
    career_growth()
    appraisal()
    work_unit_sentiment()
    survey_viability()
    promotion_sentiment()

if __name__ == '__main__':
    main()
