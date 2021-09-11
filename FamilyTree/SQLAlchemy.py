from sqlalchemy import create_engine, Column, Integer, Text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

## WIP - creates tables but no relationships yet:

# Relationships info
# https://hackersandslackers.com/sqlalchemy-data-models/

# Basic intro (single table create and CRUD)
# https://www.youtube.com/watch?v=jaKMm9njcJc&list=PL4iRawDSyRvVd1V7A45YtAGzDk6ljVPm1

# Connect to SQLite database.
engine = create_engine('sqlite:///FamilyTree.db', echo=True)

# Bind session with the engine. What database should it intereact with is defined in bind parameter.
Session = sessionmaker(bind=engine)

# Initialize the session. To query against the db.
session1 = Session()

# `declarative_base` is factory function that constructs a base class for declarative class definitions.
# SQL alchemy should know about the models we've defined. So we let it know by extending from Base.
Base = declarative_base()

class Person(Base):
    __tablename__ = 'Person'
    PersonID = Column(Integer, primary_key=True, autoincrement=True)
    FirstName = Column(Text)
    LastName = Column(Text)

class Family(Base):
    __tablename__ = 'Family'
    FamilyID = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    FamilyDescription = Column(Text)

class Relation(Base):
    __tablename__ = 'Relation'
    RelationID = Column(Integer, primary_key=True, autoincrement=True)
    PrimaryPersonID = Column(Integer)
    RelationTypeID = Column(Integer)
    RelatedPersonID = Column(Integer)
    FamilyID = Column(Integer)

class RelationType(Base):
    __tablename__ = 'RelationType'
    RelationTypeID = Column(Integer, primary_key=True, autoincrement=True)
    RelationType = Column(Text)
    SourceID = Column(Integer)

class LifeEvent(Base):
    __tablename__ = 'LifeEvent'
    LifeEventID = Column(Integer, primary_key=True, autoincrement=True)

class Source(Base):
    __tablename__ = 'Source'
    SourceID = Column(Integer, primary_key=True, autoincrement=True)

# Migrate the initial model changes, creating table.
Base.metadata.create_all(engine)
