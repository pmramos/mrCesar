from google.appengine.ext import ndb
from google.appengine.ext.ndb import model


class Colleges(model.Model):
    #demographic
    unitid = ndb.IntegerProperty()
    name = ndb.StringProperty()
    city = ndb.StringProperty()
    state = ndb.StringProperty()
    zipcode = ndb.StringProperty()
    url = ndb.StringProperty()
    location = ndb.GeoPtProperty()

    #financial aid
    percent_need_met = ndb.IntegerProperty()
    pell_eligible = ndb.IntegerProperty()

    net_price_1 = ndb.IntegerProperty()
    net_price_2 = ndb.IntegerProperty()
    net_price_3 = ndb.IntegerProperty()
    net_price_4 = ndb.IntegerProperty()
    net_price_5 = ndb.IntegerProperty()

    loan_default_rate = ndb.IntegerProperty()
    median_borrowing = ndb.IntegerProperty()

    #enrollment
    size = ndb.IntegerProperty()
    total_men = ndb.IntegerProperty()
    total_women = ndb.IntegerProperty()

    total_black = ndb.IntegerProperty()
    black_men = ndb.IntegerProperty()
    black_women = ndb.IntegerProperty()
    total_latino = ndb.IntegerProperty()
    latino_men = ndb.IntegerProperty()
    latino_women = ndb.IntegerProperty()

    total_white = ndb.IntegerProperty()
    white_men = ndb.IntegerProperty()
    white_women = ndb.IntegerProperty()


    #cost
    in_state_tuition_fee = ndb.IntegerProperty()
    out_of_state_tuition_fee = ndb.IntegerProperty()

    #graduation rates
    grad_6_yr = ndb.IntegerProperty()
    grad_6_yr_white = ndb.IntegerProperty()
    grad_6_yr_black = ndb.IntegerProperty()
    grad_6_yr_latino = ndb.IntegerProperty()
    grad_6_yr_urm = ndb.IntegerProperty()


    #selectivity
    admit_rate = ndb.IntegerProperty()

    #testing
    sat_cr_25 = ndb.IntegerProperty()
    sat_cr_75 = ndb.IntegerProperty()
    sat_m_25 = ndb.IntegerProperty()
    sat_m_75 = ndb.IntegerProperty()
    sat_w_25 = ndb.IntegerProperty()
    sat_w_75 = ndb.IntegerProperty()

    act_comp_25 = ndb.IntegerProperty()
    act_comp_75 = ndb.IntegerProperty()
    act_eng_25 = ndb.IntegerProperty()
    act_eng_75 = ndb.IntegerProperty()
    act_m_25 = ndb.IntegerProperty()
    act_m_75 = ndb.IntegerProperty()
    act_w_25 = ndb.IntegerProperty()
    act_w_75 = ndb.IntegerProperty()

    average_gpa = ndb.IntegerProperty()

    #deadlines
    early_decision_1 = ndb.DateProperty()
    early_decision_2 = ndb.DateProperty()
    early_action_1 = ndb.DateProperty()
    early_action_2 = ndb.DateProperty()
    regular_decision = ndb.DateProperty()


class Student(model.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()
    city = ndb.StringProperty()
    state = ndb.StringProperty()
    race = ndb.StringProperty()
    income = ndb.IntegerProperty(required=False)
    parent_education_attained = ndb.StringProperty(required=False)
    is_first_gen = ndb.BooleanProperty()
    gpa = ndb.FloatProperty()
    sat_reading = ndb.IntegerProperty()
    sat_math = ndb.IntegerProperty()
    sat_writing = ndb.IntegerProperty()
    create_time = ndb.DateTimeProperty(auto_now_add=True)
