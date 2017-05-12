from collections import Counter
import pandas as pd
import numpy as np
import json
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.test_database


jsonFile = 'data.json'
f = open('evs2015_PRDF.csv', "r")
df = pd.read_csv('evs2015_PRDF.csv')
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

    print empSatifcationDict


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

    print supervisorDict


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

    print supervisorDict


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

    print supervisorDict


def immediate_supervisor():
    question52(52)
    supervisor_set1(42, 47)
    supervisor_set2(48, 51)


def work_life_balance():
    jsonOut_Set1 = work_life_set1(74, 78)
    jsonOut_Set2 = work_life_set2(79, 84)
    jsonOut_q72 = question72(72)
    jsonOut_q73 = question73(73)

    print jsonOut_Set1
    print jsonOut_q72
    print jsonOut_Set2
    print jsonOut_q73


def main():
    work_life_balance()
    employee_satisfaction()
    immediate_supervisor()


if __name__ == '__main__':
    main()
