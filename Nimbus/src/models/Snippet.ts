import mongoose, { Types } from 'mongoose';

export interface ISnippet {
    title: string;
    author: Types.ObjectId;
    language: string;
    content: string;
}

const SnippetSchema = new mongoose.Schema<ISnippet> (
    {
        title: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 20,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        language: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        content: {
            type: String,
            required: true,
            minlength: 1
        }
    },
    {
        timestamps: true
    }
)

const Snippet = mongoose.models.Snippet || mongoose.model( "Snippet" , SnippetSchema )

export default Snippet